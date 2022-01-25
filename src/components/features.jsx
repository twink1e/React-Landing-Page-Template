import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas} from '@fortawesome/free-solid-svg-icons'

library.add(fas);

export const Features = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Features</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-12 col-md-4'>
                  {' '}
                  <FontAwesomeIcon icon={d.icon} className="fa"/>
                  <h3>{d.title}</h3>
                  <div dangerouslySetInnerHTML={{ __html: d.text }} />
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}
