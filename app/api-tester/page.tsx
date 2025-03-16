'use client'

import { useState, FormEvent, ChangeEvent } from 'react'
import { toast } from 'react-hot-toast'

type HttpMethod = 'GET' | 'POST'

interface RequestOptions {
  method: HttpMethod
  headers: {
    'Content-Type': string
  }
  body?: string
}

interface ApiResponse {
  error?: string
  [key: string]: any
}

const ApiTester = () => {
  const [url, setUrl] = useState<string>('')
  const [requestBody, setRequestBody] = useState<string>('')
  const [response, setResponse] = useState<ApiResponse | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [method, setMethod] = useState<HttpMethod>('POST')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    try {
      const requestOptions: RequestOptions = {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
      }

      // Only include body for POST requests
      if (method === 'POST') {
        // Validate JSON for POST requests
        JSON.parse(requestBody)
        requestOptions.body = requestBody
      }

      // For GET requests with JSON body, append it as query parameters
      let targetUrl = url
      if (method === 'GET' && requestBody.trim()) {
        try {
          const params = new URLSearchParams()
          const bodyParams = JSON.parse(requestBody)
          Object.entries(bodyParams).forEach(([key, value]) => {
            params.append(key, String(value))
          })
          targetUrl = `${url}${url.includes('?') ? '&' : '?'}${params.toString()}`
        } catch (error) {
          throw new Error('Invalid JSON for query parameters')
        }
      }

      const response = await fetch(targetUrl, requestOptions)
      const data: ApiResponse = await response.json()
      setResponse(data)
      toast.success('Request sent successfully!')
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to send request'
      toast.error(errorMessage)
      setResponse({ error: errorMessage })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative z-10 overflow-hidden pb-[100px] pt-[120px] md:pt-[130px] lg:pt-[160px]">
      <div className="container">
        <div className="flex flex-wrap items-center">
          <div className="w-full">
            <h1 className="mb-8 text-3xl font-bold text-black dark:text-white sm:text-4xl">API Tester</h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex items-center space-x-4">
                <label className="text-sm font-medium text-dark dark:text-white">Method:</label>
                <div className="flex rounded-md shadow-sm">
                  {(['GET', 'POST'] as const).map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setMethod(m)}
                      className={`px-4 py-2 text-sm font-medium ${
                        method === m
                          ? 'bg-primary text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-50 dark:bg-[#242B51] dark:text-gray-200'
                      } ${m === 'GET' ? 'rounded-l-md' : 'rounded-r-md'} border border-gray-200 dark:border-gray-600`}>
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-3 block text-sm font-medium text-dark dark:text-white">API Endpoint URL</label>
                <input
                  type="url"
                  required
                  value={url}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setUrl(e.target.value)}
                  className="text-body-color shadow-one dark:shadow-signUp w-full rounded-md border border-transparent bg-white px-6 py-3 text-base outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51]"
                  placeholder="https://api.example.com/endpoint"
                />
              </div>

              <div>
                <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                  {method === 'POST' ? 'Request Body (JSON)' : 'Query Parameters (JSON)'}
                </label>
                <textarea
                  value={requestBody}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setRequestBody(e.target.value)}
                  className="text-body-color shadow-one dark:shadow-signUp w-full rounded-md border border-transparent bg-white px-6 py-3 text-base outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51]"
                  rows={8}
                  placeholder={method === 'POST' ? '{"key": "value"}' : '{"param1": "value1", "param2": "value2"}'}
                />
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  {method === 'GET' ? 'JSON will be converted to query parameters' : 'Enter request body as JSON'}
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="rounded-md bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80 disabled:opacity-50">
                {loading ? 'Sending...' : 'Send Request'}
              </button>
            </form>

            {response && (
              <div className="mt-8">
                <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">Response</h2>
                <pre className="text-body-color shadow-one dark:shadow-signUp overflow-auto rounded-md bg-white p-4 text-sm dark:bg-[#242B51]">
                  {JSON.stringify(response, null, 2)}
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApiTester
