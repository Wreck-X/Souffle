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

  let organisations = Map.HashMap<Name, Data>(0, Text.equal, Text.hash);

  public func insert(name : Name, Data : Data): async () {
    organisations.put(name, Data);
    lookup_list := Array.append<Name>(lookup_list, [name]);
  };

  public query func lookup(name : Name) : async ?Data {
    organisations.get(name)
  };

  public func getOrgs(): async [Text] {
      return lookup_list;
    };
};