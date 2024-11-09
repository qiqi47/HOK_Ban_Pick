
const Header = () => {
  return (
	<div>
<div className='flex justify-between items-center p-4 bg-blue-800 text-white flex-row'>
      <h3>Honor of Kings Ban/Pick Simulator</h3>
<div className='gap-4 flex flex-row'>
<a className='text-white' href='/'>Normal/Ranking (2 bans)</a>
<a className='text-white' href='match'>Match (4 bans) </a>
</div>
<img src='/github-mark-white.png' className='w-8 h-8 cursor-pointer' onClick={()=>window.open('https://github.com/qiqi47')}/>
</div>
</div>
  )
}

export default Header