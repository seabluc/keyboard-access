// ===========================POC: Guiding Attention===========================
export default function Attention() {
  return (
    <>
      <div className="flex flex-col w-full h-full overflow-scroll">
        <h1 className="text-5xl font-sans font-semibold pt-5 pl-10 pb-3">The goodest of doggos 🐕</h1>
        <div className="relative border-4 border-double p-4 m-4 bg-slate-900 hover:bg-slate-800 w-1/2 h-auto">
            <h1 className="text-3xl font-sans font-semibold pl-10 pb-2">Bellebows</h1>
            <img src="./belle-pls.gif" alt="perfection" className=" w-56 h-56"/>
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
          <h1 className="text-3xl font-sans font-semibold pl-10 pb-2">Capybaras</h1>
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

        <div className="relative border-4 border-double p-4 m-4 bg-slate-900 hover:bg-slate-800 w-1/2 h-full">
          <h1 className="text-3xl font-sans font-semibold pl-10 pb-2">capybara</h1>
            <img src="./capybara.png" alt="coconut dog" className="w-56 h-56"/>
            <article className="absolute top-14 left-60 m-2 p-2 border-2 w-auto max-h-56 font-sans text-xl text-white overflow-auto">
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
            officia deserunt mollit anim id est laborum.
          </p>
        </article>
        </div>
        
      </div>
    </>
  )
}