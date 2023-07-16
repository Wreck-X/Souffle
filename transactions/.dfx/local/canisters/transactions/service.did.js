export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'append' : IDL.Func([IDL.Text], [], []),
    'getItems' : IDL.Func([], [IDL.Vec(IDL.Text)], []),
  });
};
export const init = ({ IDL }) => { return []; };
