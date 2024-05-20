export default function Attention() {
  return (
    <div className="flex-wrap">
      <h1 className="flex justify-center text-5xl font-sans font-semibold pt-4">My favorite dogs</h1>
      <div className="flex-col justify-start pl-16 pt-6 pb-3">
        <h1 className="text-3xl font-sans font-semibold pl-6 py-3">bellebows</h1>
        <div className="flex min-w-10 min-h-10">
          <img src="./belle-pls.gif" alt="oh nnooo" className="w-52 h-52"/>
          <article className="ml-4 px-2 py-4 border-2">
            <p className="font-sans text-lg">This is Belle O'Neill, Kansas's Doberman/cattle dog/hound mix rescue dog</p>
            <p className="font-sans text-base py-2 text-wrap">She was born with a birth defect that stretches the muscles on her head backwards.</p>
            <p className="font-sans text-base py-2 text-wrap">As a result, she permanently looks shocked or surprised, but thankfully it's harmless!</p>
            <p className="font-sans text-base py-2 text-wrap">Belle's Tiktok currently has 800k Followers and a total of 25.8M Likes.</p>
            <p className="font-sans text-base py-2 text-wrap">Her beauty blinds me and she truly is the goodest of doggos.</p>
          </article>
        </div>
        <h1 className="text-3xl font-sans font-semibold pl-6 mt-6 py-3">capybara</h1>
        <div className="flex min-w-10 min-h-10">
          <img src="./capybara.png" alt="coconut dog" className="w-52 h-52"/>
        </div>
      </div>
    </div>
  )
}