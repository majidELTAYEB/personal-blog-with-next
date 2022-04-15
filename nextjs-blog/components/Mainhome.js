import 'tailwindcss/tailwind.css'
import HomeLogo from '../public/assets/HomeLogo.png'
export default function Mainhome (){
  return(
    <div className="py-32 px-44 font-mono flex space-x-60">
      <div >
        <section>
          <h1 className="text-8xl">
            Hi, my<br/>
            name is Majid.
          </h1>
        </section>
        <section className="py-10">
          <p className="text-2xl">
            I’m a student web developer front end & back end.<br/>
            I’m based in Paris France.
          </p>
        </section>
      </div>
      <div>
        <section>
          <img src={HomeLogo.src}/>
        </section>
      </div>

    </div>

  )
}
