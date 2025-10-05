import { useSize } from 'react-use';

export const AntdTable = () => {
    const [sized, { width, height }] = useSize(({ height }) => (
        <div className='h-full bg-red-100 p-1'>
            <div>
                <div>
                    <div className='bg-blue-100' style={{ height: height - 40 }} />
                </div>
            </div>
        </div>
    ));
    console.log(width, height);
    return (
        <>
            <div className='h-full'>
                {sized}
                <div>width: {width}</div>
                <div>height: {height}</div>
            </div>
        </>
    );
};
