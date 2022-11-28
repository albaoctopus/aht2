import React from 'react'



const Vport2 = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center py-0 px-3">
    <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video className="min-w-full h-auto absolute object-cover" autoPlay muted loop> <source src="/ACA22.mp4" type="video/mp4"/> </video>
    </div>
  
</section>
  )
}

export default Vport2