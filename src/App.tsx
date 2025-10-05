import { Breadcrumb, Layout, Menu, Spin } from 'antd';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Suspense } from 'react';
import { TestA } from './pages/TestA';
import { TestB } from './pages/TestB.tsx';
import { TestC } from './pages/TestC.tsx';
import { AntdList } from './pages/AntdList.tsx';
import { AntdDesc } from './pages/AntdDesc.tsx';
import { AntdTable } from './pages/AntdTable.tsx';
import { Home } from './pages/Home.tsx';

const { Content, Sider } = Layout;

export function App() {
    const navigate = useNavigate();

    return (
        <Layout className='h-screen w-screen'>
            <div className='flex h-full flex-col p-4'>
                <Breadcrumb className='p-4' items={[{ title: 'Home' }, { title: 'List' }, { title: 'App' }]} />
                <Layout>
                    <Sider width={200}>
                        <Menu
                            theme='dark'
                            mode='vertical'
                            defaultSelectedKeys={['2']}
                            items={[
                                { label: 'A', key: '/a' },
                                { label: 'B', key: '/b' },
                                { label: 'C', key: '/c' },
                                { label: 'list', key: '/list' },
                                { label: 'desc', key: '/desc' },
                                { label: 'table', key: '/table' },
                            ]}
                            style={{ flex: 1, minWidth: 0 }}
                            onClick={({ key }) => {
                                navigate(key);
                            }}
                        />
                    </Sider>
                    <Content className='h-full p-6'>
                        <div className='h-full overflow-auto'>
                            <Suspense fallback={<Spin />}>
                                <Routes>
                                    <Route path='/a' element={<TestA />} />
                                    <Route path='/b' element={<TestB />} />
                                    <Route path='/c' element={<TestC />} />
                                    <Route path='/list' element={<AntdList />} />
                                    <Route path='/desc' element={<AntdDesc />} />
                                    <Route path='/table' element={<AntdTable />} />
                                    <Route path='*' element={<Home />} />
                                </Routes>
                            </Suspense>
                        </div>
                    </Content>
                </Layout>
            </div>
        </Layout>
    );
}
