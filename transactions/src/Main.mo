import Array "mo:base/Array";

actor ListContract {
    var list: [Text] = [];

    public func append(item: Text): async () {
        list := Array.append<Text>(list, [item]);
        return 0;
    };

    public func getItems(): async [Text] {
      return list;
    }
};