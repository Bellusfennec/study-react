/* eslint-disable react-hooks/exhaustive-deps */
import { useSearchParams } from "react-router-dom";
import useForm from "../../../hooks/useForm";
import Form from "../../common/Form";
import RadioField from "../../common/fields/RadioField";
import FieldWrapper from "../../common/wrappers/FieldWrapper";
import { useEffect } from "react";
import { Direction } from "../../../types";

const SelectDirectionSort = () => {
  let [params, serParams] = useSearchParams();
  const query = (
    params.get("sort") === "ASC" || params.get("sort") === "DESC" ? params.get("sort") : "ASC"
  ) as Direction;
  const { formRef, form, handlerChange, handlerSubmit } = useForm({ initial: { sort: query } });

  useEffect(() => {
    if (form.sort) {
      serParams({ sort: form.sort });
    }
  }, [form]);

  return (
    <Form ref={formRef} onSubmit={handlerSubmit} onChange={handlerChange}>
      <FieldWrapper label="Сортировка">
        <div style={{ display: "flex", gap: "1rem" }}>
          <RadioField type="radio" value="ASC" name="sort" label="ASC" />
          <RadioField type="radio" value="DESC" name="sort" label="DESC" />
        </div>
      </FieldWrapper>
    </Form>
  );
};

export default SelectDirectionSort;
