const Footer = () => {
  const date = new Date()
  return (
    <div className='p-4 flex items-center justify-between h-12'>
      <h4 className="text-soft-color font-bold">Admin</h4>
      <h4 className="text-soft-color font-bold text-xs sm:text-base">&copy; {date.getFullYear()} All rights reserved by @Rohan Singh</h4>
    </div>
  )
}

export default Footer