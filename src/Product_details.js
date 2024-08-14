import React, { useState, useEffect } from 'react';
import { Button, Radio, Space, Table, Tag } from 'antd';
import
{ Pagination }
from
"antd"
;
import Datasource from './datasource';
import ButtonGroup from 'antd/es/button/button-group';
import ColorPicker, { Color } from 'antd/es/color-picker';
import Navbar from './Navbar';


const comparedata=[];
const indexdata=[];
const bottomOptions = [
    {
        label: 'bottomCenter',
        value: 'bottomCenter',
    }
];

const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        width: 100,
    },
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        width: 100,
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Description',
        dataIndex: 'description',
        width: 100,
        key: 'description',
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        showSorterTooltip: {
            target: 'full-header',
          },
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.price - b.price,
        width: 100,
    },
    {
        title: 'Discount Percentage',
        dataIndex: 'discountPercentage',
        key: 'discountPercentage',
        width: 100,
    },
    {
        title: 'Brand',
        dataIndex: 'brand',
        key: 'brand',
        width: 100,
    },
    {
        title: 'Category',
        dataIndex: 'category',
        key: 'category',
        width: 100,
    },
    {
        title: 'Image',
        dataIndex: 'images',
        key: 'images',
        width: 100,
        render: (dataIndexValue, record) => <img src={dataIndexValue} alt={record.name} style={{width:100}}/>
    },
    {
        title: 'Comparison',
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: (text, record, index) => <Button onClick = {
            (e) => {
                indexdata.push(record.id)
                console.log("corresponding email is :", record.id)
            }}> Compare </Button>
    }
]

function Product_details() {
    const data = Datasource();

    return (
        <>
             <Navbar/>
            {data ? (
                <div key={data.products.id}><Table
                    key={data.products.id}
                    columns={columns}
                    dataSource={data.products}
                    pagination={{position: "bottomcenter"}}
                    scroll={{y:400}}
                    size='medium'
                    className='Table'
                     />
                </div>
            ) : (
                <p>Loading...</p>
            )}

        </>
    )
}

export default Product_details;
