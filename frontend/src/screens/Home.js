import Pizza from '../components/Pizza';
import pizzas from '../dummy_data';

export default function Home() {
    return (
        <div>
            <div className='row'>
                {pizzas.map(pizza => {
                    return <div className='col-md-4'>
                        <div>
                            <Pizza pizza={pizza}/>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}