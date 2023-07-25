import Array "mo:base/Array";
import Map "mo:base/HashMap";
import Text "mo:base/Text";


actor ListContract{

  type Name = Text;
  type Orgs = Text;
  var lookup_list: [Text] = [];

  type Data = {
    id: Orgs;
    summary: Text;
    resource_type: Text;
    total: Float;
    create_time: Text;
    recipient: Text;
  };

    var list: [Text] = [];

    public func append(item: Text): async () {
        list := Array.append<Text>(list, [item]);
        return 0;
    };

    public func getItems(): async [Text] {
      return list;
    }
};
