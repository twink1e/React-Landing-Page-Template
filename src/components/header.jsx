import ParticlesBg from "particles-bg";

export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <ParticlesBg type="circle" bg={{zIndex: 0, position:"absolute", top:0}} />
        <div className='overlay'>
          <div className='container'>
          
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <img src={ require('../img/whitelogo.png').default } width="38%"/>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <div className='row '>
                  <a href='#features'>
                    <img src={ require('../img/google-play-badge.png').default } width="38%"/>
                  </a>
                  <a href='#features'>
                    <img src={ require('../img/apple_app_store.svg').default} width="30%"/>
                  </a>
              </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
