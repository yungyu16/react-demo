import { use } from 'react';
import { Divider } from 'antd';
import { useSearchParam, useTween } from 'react-use';

const promise = new Promise((resolve) => setTimeout(resolve, 1000));

export function TestB() {
    const opacity = useTween('inCirc', 3000);
    const useSearchParam1 = useSearchParam('test');
    use(promise);
    return (
        <>
            <Divider />
            <div
                style={{
                    opacity,
                    width: `${opacity * 100}%`,
                    height: 100,
                    background: '#3b82f6',
                    // transition: 'opacity 0.3s ease-out',
                }}
            />
            <Divider />
            <div className={'ring-amber mx-auto my-4 size-16 text-center text-red-200 ring-8'}>{useSearchParam1}</div>
            <Divider />
            <div className='mx-auto aspect-video h-80 bg-pink-800'>bbbbbbbbbbbbb</div>
            <div className='my-12 bg-indigo-300'>
                <img className='mx-auto h-48 w-96 object-cover' src='/img.png' />
            </div>
            <div className='relative h-32 w-32 bg-indigo-300'>
                <div className='absolute inset-x-4 bg-green-300'>02</div>
            </div>
            <div className='h-80 columns-3 *:bg-cyan-200'>
                <div className='size-full'>1</div>
                <div className='size-full'>2</div>
                <div className='size-full'>3</div>
            </div>
            <div className='h-80'></div>
            <div
                className='flex justify-center -space-x-3 bg-gray-200 pt-80 font-mono font-bold text-white *:flex *:size-16 *:items-center
                    *:justify-center *:rounded-full *:bg-pink-500 *:shadow *:ring-2 *:ring-white *:ring-offset-1'>
                <div className='z-40'>01</div>
                <div className='z-30'>04</div>
                <div className='z-20'>03</div>
                <div className='z-10'>02</div>
                <div className='z-0'>05</div>
            </div>
            <div className='my-5 size-80 bg-pink-50'>
                <div className='size-16 bg-green-200'></div>
                <div className='-mt-12 size-16 bg-red-200'></div>
                <div className='size-16 bg-green-200'></div>
            </div>
            <div
                className='flex justify-center bg-gray-200 font-mono font-bold text-white *:flex *:size-16 *:items-center *:justify-center
                    *:rounded-full *:bg-pink-500 *:shadow *:ring-2 *:ring-white *:ring-offset-1'>
                <div className='z-40'>01</div>
                <div className='z-30'>04</div>
                <div className='z-20'>03</div>
                <div className='z-10'>02</div>
                <div className='z-0'>05</div>
            </div>
            <div className='size-36'></div>
            <button
                className='rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm outline outline-4
                    outline-offset-2 outline-blue-500 ring-4 ring-red-600 ring-offset-2 dark:border-transparent dark:bg-slate-700
                    dark:text-slate-200'>
                Button C
            </button>

            <div className='size-36'></div>
        </>
    );
}
