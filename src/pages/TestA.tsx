export function TestA() {
    return (
        <>
            <div className='container m-8 flex gap-4 text-center font-mono text-lg font-bold subpixel-antialiased'>
                <div className='basis-1/12 rounded-md bg-pink-100 shadow'>a</div>
                <div className='basis-2/12 rounded-md bg-pink-100 shadow'>b</div>
                <div className='basis-3/12 rounded-md bg-pink-100 shadow'>c</div>
            </div>
            <div
                className='container relative left-56 top-1/4 h-20 border border-blue-900 text-center font-mono text-lg font-bold
                    subpixel-antialiased'>
                <div className='absolute left-1/4 w-1/4 rounded-md bg-pink-100 uppercase shadow'>a</div>
                <div className='absolute left-2/4 top-1/3 w-1/4 rounded-md bg-pink-100 uppercase shadow'>b</div>
                <div className='absolute left-3/4 top-2/3 w-1/4 rounded-md bg-pink-100 uppercase shadow'>h</div>
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci assumenda consectetur dolores ducimus
                enim est, in incidunt ipsa iste magni maxime minima neque, officiis qui quibusdam quo vitae voluptates
                voluptatibus.
            </p>
            <div className='m-24 size-28 border-green-500 outline outline-1 outline-offset-2 outline-pink-500'></div>
        </>
    );
}
