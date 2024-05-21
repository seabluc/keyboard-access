// ===========================POC: Guiding Attention===========================
export default function Attention() {
  return (
    <>
    <div className="flex-wrap">
      <h1 className="text-5xl font-sans font-semibold pt-5 pl-10 pb-2">The goodest of doggos 🐕</h1>
        <div className="flex justify-start items-start">
          <h1 className="relative top-0 left-0 text-3xl font-sans font-semibold px-6 py-3">bellebows</h1>
          <img src="./belle-pls.gif" alt="oh nnooo" className=" w-52 h-52"/>
          <article className="ml-4 px-2 py-3 border-2 font-sans text-xl text-white min-w-80 max-w-96">
            <p className="font-sans text-wrap">This is Belle O&apos;Neill, she&apos;s a Doberman/cattle dog/hound mix rescue dog!
            She was born with a birth defect that stretches back the muscles on her head
            As a result, she permanently looks shocked/surprised, &#40;thankfully it&apos;s harmless&#41;
           Belle&apos;s
              <a 
                href="https://www.tiktok.com/@bellebows4117?lang=en" 
                target="_blank"
                className="text-blue-400"> TikTok</a> currently has 800k Followers and a total of 25.8M Likes</p>
          </article>
        </div>
        <div className="flex-col min-w-10 min-h-10">
        <h1 className="text-3xl font-sans font-semibold pl-6 mt-6 py-3">capybara</h1>
          <img src="./capybara.png" alt="coconut dog" className="w-52 h-52"/>
        </div>
    </div>
    </>
  )
}