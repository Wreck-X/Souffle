import Array "mo:base/Array";

actor ListContract {
    var list: [Text] = [];

    public func append(item: Text): async () {
        list := Array.append<Text>(list, [item]);     
    };

    public func getItems(): async [Text] {
      return list;  
    }
};