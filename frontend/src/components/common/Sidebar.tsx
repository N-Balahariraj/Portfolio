import Navbar from './Navbar'

export default function Sidebar() {
  return (
    <aside className='sidebar'>
        <div className='brand'>
            <span className='logo'>Logo</span>
            <span>Clock</span>
        </div>
        <section className='profile'>
            <span>Balahariraj Nagamanickam</span>
        </section>
        <Navbar/>
        <footer>
            <div className='socials'></div>
            <span>copyrights</span>
        </footer>
    </aside>
  )
}
