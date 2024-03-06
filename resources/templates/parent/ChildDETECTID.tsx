import React from 'react';

type Props = {
  prop: {
    data: string;
  };
};
export default function ChildDETECTID(props: Props): JSX.Element {
  return <div>{props.prop.data}</div>;
}
