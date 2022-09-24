import { Modal, Input, Button, Form, InputNumber } from "antd";
import React, { useState } from "react";
import "antd/dist/antd.css";
import Table from "./Table";
import { useDispatch, useSelector } from "react-redux";
import { addExpense,deleteExpense } from "./expense/ExpenseSlicer";

const ModalForm = () => {

  const expenseList = useSelector((state) => state.expense);

  const dispatch = useDispatch();

  const [form] = Form.useForm();
  const [userData, setuserData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const layout = { labelCol: { span: 8 }, wrapperCol: { span: 16 } };

  const onFinish = (values) => {
    dispatch(addExpense(values))
    // setuserData([...userData, values]);
    setIsModalVisible(false);
    form.resetFields();
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleDelete = (id) => {
    dispatch(deleteExpense(id));
    console.log(deleteExpense);
    // let removeData = userData.filter((v, index) => index !== id);
    // setuserData(removeData);
  };

  return (
    <>

      <div className="container">
        <div className="btn_center">
          <Button type="primary" onClick={showModal} className="expensebtn">
            Add Expense
          </Button>
        </div>

        <div> <Modal title="Add Expense" open={isModalVisible} footer={null} onCancel={handleCancel} >
          <Form {...layout} name="nest-messages" onFinish={onFinish} form={form}>
            <Form.Item name={["category"]} label="Category" rules={[{ required: true, message: "Enter a Category", min: 3 },]} hasFeedback>
              <Input />
            </Form.Item>

            <Form.Item name={["expensename"]} label="Expense Name" rules={[{ required: true, message: "Enter a Expensename", min: 3 },]} hasFeedback>
              <Input />
            </Form.Item>

            <Form.Item name={["amount"]} label="Amount Spend" rules={[{ required: true, message: "Enter Amount" }]}>
              <InputNumber />
            </Form.Item>

            <Form.Item name={["dateoftransaction"]} label="Date of Transaction" rules={[{ required: true, message: "Pick the Date" }]} hasFeedback>
              <input type={"date"} />
            </Form.Item>

            <Form.Item name={["description"]} label="Description" rules={[{ required: true, message: "Enter a Description", min: 5 },]} hasFeedback>
              <Input.TextArea />
            </Form.Item>

            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
        </div>
      </div>
      <div className="tableContainer">
        <Table tracker={expenseList} open={showModal} handleDelete={handleDelete} setuserData={setuserData} />
      </div>
    </>
  );
};

export default ModalForm;
