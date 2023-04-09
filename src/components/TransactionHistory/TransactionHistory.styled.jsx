import styled from '@emotion/styled';

export const Transaction = styled.table`
  margin: 0 auto;
  width: 320px;
  background-color: #c1f2f9;
  border: 1px solid #000000;
  box-shadow: 0 0 10px #c6cccced;

  border-spacing: 0;
`;

export const TransactionHead = styled.thead`
  background-color: rgb(0, 292, 112);
`;

export const TransactionHeadText = styled.th`
  font-size: 12px;
  padding: 5px;
  color: #524a4d;
`;

export const TransactionBodyText = styled.td`
  text-align: center;
  font-size: 10px;
  padding: 5px;
  border: 1px solid #524a4d;
`;
