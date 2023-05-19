function IntroText({ content }) {
  return (
    <>
      <div className='bg-black/20 rounded-2xl p-20'>
        <h2 className='text-4xl font-bold mb-6'>{content.title}</h2>
        <div className='prose prose-lg max-w-none text-white'>
          <div
            dangerouslySetInnerHTML={{
              __html: content.text,
            }}
          />
        </div>
      </div>
    </>
  );
}

export default IntroText;
