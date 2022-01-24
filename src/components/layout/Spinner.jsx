import spinner from './assets/spinner.gif'

function Spinner() {
  return <div className='w-10 mt-20'>
      <img className='text-center mx-auto' src={spinner} alt='Loading...'/>
  </div>
}

export default Spinner
