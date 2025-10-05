import { Divider } from 'antd';
import { useBeforeUnload } from 'react-use';

export function Home() {
    useBeforeUnload(true, '真的要离开吗');
    return (
        <>
            <div className='my-box bg-green-50'>Home</div>
            <Divider />
            <div className='size-80 overflow-scroll overscroll-contain bg-slate-300'>
                <div className='h-96 w-40 bg-red-500'></div>
            </div>
            <Divider />
            <div className='not-prose relative overflow-hidden rounded-xl bg-slate-50 dark:bg-slate-800/25'>
                <div className='relative overflow-auto rounded-xl p-8'>
                    <div
                        className='dark:highlight-white/5 relative mx-auto flex max-w-sm items-center gap-6 overflow-visible rounded-xl bg-white shadow-lg
                            ring-1 ring-black/5 dark:bg-slate-800'>
                        <img className='absolute -left-6 h-24 w-24 rounded-full shadow-lg' src='img.png' />
                        <div className='flex flex-col py-5 pl-24'>
                            <strong className='text-sm font-medium text-slate-900 dark:text-slate-200'>
                                Andrew Alfred
                            </strong>
                            <span className='text-sm font-medium text-slate-500 dark:text-slate-400'>
                                Technical advisor
                            </span>
                        </div>
                    </div>
                </div>
                <div className='pointer-events-none absolute inset-0 rounded-xl border border-black/5 dark:border-white/5'></div>
            </div>
            <Divider />
            <div className='relative h-32 w-32 border-4 border-black bg-purple-200'>
                <div className='absolute inset-x-0 inset-y-1/2 bg-purple-400'></div>
            </div>
            <Divider />
            <div className='size-28 truncate'>
                lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Adipisci eaque, fugit iste officia praesentium quisquam sapiente veritatis. Ab dolore
                ducimus enim impedit modi, reiciendis vitae? Nam officia perspiciatis placeat possimus.
            </div>
            <div className='size-28 text-clip'>
                lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Adipisci eaque, fugit iste officia praesentium quisquam sapiente veritatis. Ab dolore
                ducimus enim impedit modi, reiciendis vitae? Nam officia perspiciatis placeat possimus.
            </div>
        </>
    );
}
