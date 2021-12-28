import React from 'react'

function Lorem({ lorem }: { lorem: string[] }) {
  return (
    <section>
      {lorem.length !== 0 &&
        lorem.map((item) => (
          <div>
            <p>{item}</p>
          </div>
        ))}
    </section>
  )
}

export default Lorem
