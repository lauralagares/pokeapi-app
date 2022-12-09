import './style.css'
import Pokeball from '../../images/pokeball.png';

function Loading() {
  return (
    <div>
      <img src={Pokeball} className="pokeball-loader" alt="Loading" />
    </div>
  )
}

export default Loading