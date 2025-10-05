import { Avatar, Card, List } from 'antd';

const data = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
];
export const AntdList = () => {
    return (
        <List
            itemLayout='vertical'
            dataSource={data}
            renderItem={(item, index) => (
                <List.Item extra={<h1 className='bg-red-100'>hello</h1>}>
                    <List.Item.Meta
                        avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                        title={<a href='https://ant.design'>{item.title}</a>}
                        description='Ant Design, a design language for background applications, is refined by Ant UED Team'
                    />
                    <Card title='Card title'>
                        <div className='size-28 bg-blue-100'>{item.title}</div>
                    </Card>
                </List.Item>
            )}
        />
    );
};
