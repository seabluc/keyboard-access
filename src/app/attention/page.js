// ===========================POC: Guiding Attention===========================
export default function Attention() {
  return (
    <>
      <div className="flex flex-col w-full h-full overflow-scroll">
        <h1 className="text-5xl font-sans font-semibold pt-5 pl-10 pb-3">The goodest of doggos 🐕</h1>
        <div className="relative border-4 border-double p-4 m-4 bg-slate-900 hover:bg-slate-800 w-1/2 h-auto">
            <h1 className="text-3xl font-sans font-semibold pl-10 pb-2">Bellebows</h1>
            <img src="./belle-pls.gif" alt="silly dog" className=" w-56 h-56"/>
            <article className="absolute top-14 left-60 m-2 p-2 border-2 w-auto max-h-56 font-sans text-xl text-white overflow-auto">
              <p className="">
                Belle O&apos;Neill is rescue, and a Doberman/cattle dog/hound mix who has a unique  
                birth defect that stretches back the muscles on her head. Due to her condition, she 
                permanently looks shocked/surprised &#40;thankfully it&apos;s harmless&#41;. Belle is 
                very popular as her 
                <a 
                  href="https://www.tiktok.com/@bellebows4117?lang=en" 
                  target="_blank"
                  className="text-blue-400"> TikTok
                </a> currently has 800k Followers and a total of 25.8M Likes!
              </p>
        </article>
        </div>
        
        <div className="relative border-4 border-double p-4 m-4 bg-slate-900 hover:bg-slate-800 w-1/2 h-auto">
          <h1 className="text-3xl font-sans font-semibold pl-10 pb-2">Mayor Max</h1>
            <img src="./mayor-max.png" alt="mayor dog" className="w-56 h-56"/>
            <article className="absolute top-14 left-60 m-2 p-2 border-2 w-auto max-h-56 font-sans text-xl text-white overflow-auto">
          <p className="">
            On June 11, 2012, Max &#40;Maximus Mighty-Dog Mueller&#41; was voted into office during an 
            election held in Idyllwild, California. Max won a full ⅔ of the votes, and became Idyllwild's first mayor. 
            Unfortunately, Mayor Max I passed away after just nine months in office.
            Max's cousin takes on the mantle by becoming Mayor Max II and serves for nine years until his passing
            &#40;July 30, 2022&#41;. Several months later, Mayor Max III is born and serves as Idyllwild's mayor to this day.
          </p>
        </article>
        </div>

        <div className="relative border-4 border-double p-4 m-4 bg-slate-900 hover:bg-slate-800 w-1/2 h-auto">
          <h1 className="text-3xl font-sans font-semibold pl-10 pb-2">Capybara</h1>
            <img src="./capybara.png" alt="coconut dog" className="w-56 h-56"/>
            <article className="absolute top-14 left-60 m-2 p-2 border-2 w-auto max-h-56 font-sans text-xl text-white overflow-auto">
          <p className="">
            Often referred to as coconut dogs, Capybaras are giant rodents native to South America and 
            are highly social creatures that live near bodies of water.
            They are the largest living rodent with its closest relatives being guinea pigs and chinchillas. 
            WA is one of the few states where you can legally own
            a capybara &#40;I have yet to see one in person 😔&#41;.
          </p>
        </article>
        </div>
        <footer>hi</footer>
      </div>
    </>
  )
}