import React from "react";

import Super, {
  Button,
  Input as CustomInput,
  Form,
  NumberPicker,
  Select,
  SearchTable as SearchTableExport,
} from "@alifd/next";

import SuperOther from "@alifd/next";

import utils from "../../utils";

import { i18n as _$$i18n } from "../../i18n";

import "./index.css";

const SuperSub = Super.Sub;

const SelectOption = Select.Option;

const SearchTable = SearchTableExport.default;

class Test$$Page extends React.Component {
  constructor(props, context) {
    super(props);

    this.utils = utils;

    this.state = {};
  }

  i18n = (i18nKey) => {
    return _$$i18n(i18nKey);
  };

  componentDidMount() {}

  render() {
    const __$$context = this;
    const { state } = this;
    return (
      <div>
        <Super title={this.state.title} />
        <SuperSub />
        <SuperOther />
        <Button />
        <Button.Group />
        <CustomInput />
        <Form.Item />
        <NumberPicker />
        <SelectOption />
        <SearchTable />
      </div>
    );
  }
}

export default Test$$Page;

function __$$createChildContext(oldContext, ext) {
  const childContext = {
    ...oldContext,
    ...ext,
  };
  childContext.__proto__ = oldContext;
  return childContext;
}
