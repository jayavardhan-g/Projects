import logo from '/logo.svg'
const Navbar = () => {
  return (
    <div className="sticky flex justify-between items-center bg-[#000000] text-white top-0 w-full h-1/5 p-6" >
        <img src={logo}></img>
        <div>Jayavardhan</div>
    </div>
  )
}
export default Navbar