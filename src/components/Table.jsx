import React from 'react'

export const Table = ({stats}) => {
  return (
    <div>
      <div className="mt-6 border border-gray-600">
        <dl className="divide-y divide-gray-400">
          {stats &&
            stats.map((el) => (
              <>
                <div className="px-4 py-2 grid grid grid-cols-2 grid-rows-1">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    {el.stat.name}
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700  sm:mt-0">
                    | {el.base_stat}
                  </dd>
                </div>
              </>
            ))}
        </dl>
      </div>
    </div>
  )
}
