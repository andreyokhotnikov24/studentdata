import { Table } from "antd";
import { useCrypto } from "../context/crypto-context";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    // showSorterTooltip: { target: "full-header" },
    // onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ["descend"],
  },
  {
    title: "Price, $",
    dataIndex: "price",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: "Amount",
    dataIndex: "amount",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.amount - b.amount,
    // filters: [
    //   {
    //     text: "London",
    //     value: "London",
    //   },
    //   {
    //     text: "New York",
    //     value: "New York",
    //   },
    // ],
    // onFilter: (value, record) => record.address.indexOf(value) === 0,
  },
];

export default function AssetsTable() {
  const { assets } = useCrypto();
  // const onChange = (pagination, filters, sorter, extra) => {
  //   console.log("params", pagination, filters, sorter, extra);
  // };
  const data = assets.map((a) => ({
    key: a.id,
    name: a.name,
    price: a.price,
    amount: a.amount,
  }));
  return (
    <Table
      columns={columns}
      dataSource={data}
      // onChange={onChange}
      // showSorterTooltip={{ target: "sorter-icon" }}
      pagination={false}
    />
  );
}
