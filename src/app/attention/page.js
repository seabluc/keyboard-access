// ===========================POC: Guiding Attention===========================
export default function Attention() {
  return (
    <>
      <h1 className="text-5xl font-sans font-semibold pt-5 pl-10 pb-2">The goodest of doggos 🐕</h1>
      <div className="flex flex-col">
        <div className="relative border-4 border-double p-2 m-4">
            <h1 className="text-3xl font-sans font-semibold px-6 pb-2">bellebows</h1>
            <img src="./belle-pls.gif" alt="perfection" className=" w-56 h-56"/>
            <article className="absolute top-10 left-60 m-2 p-2 border-2 w-2/5 max-h-56 font-sans text-xl text-white overflow-hidden">
          <p className="">
            Belle O&apos;Neill is a Doberman/hound mix/cattle dog who has a unique birth 
            defect that stretches back the muscles on her head. As a result, she permanently 
            looks shocked/surprised &#40;thankfully it&apos;s harmless&#41;! Belle&apos;s
            <a 
              href="https://www.tiktok.com/@bellebows4117?lang=en" 
              target="_blank"
              className="text-blue-400"> TikTok</a> currently has 800k Followers and a total of 25.8M Likes</p>
        </article>
        </div>
        
        <div className="flex flex-1">
          <div className="flex-col min-w-10 min-h-10">
            <h1 className="text-3xl font-sans font-semibold pl-6 mt-6 py-3">capybara</h1>
              <img src="./capybara.png" alt="coconut dog" className="w-52 h-52"/>
          </div>
        </div>

      </div>
    </>
  )
}