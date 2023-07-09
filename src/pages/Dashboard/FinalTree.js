import { useState } from "react";

const FinalTree = () => {
  return (
    <div className="flex flex-col items-center">
      <Binary first={true} />

      <div className="w-480">
        <HSeparator />
      </div>
      <div className="flex gap-20">
        <Binary />
        <Binary />
      </div>

      <div className="flex gap-20">
        <HSeparator width="280" />
        <HSeparator width="280" />
      </div>
      <div className="flex gap-20">
        <Binary />
        <Binary />
        <Binary />
        <Binary />
      </div>

      <div className="flex gap-20">
        {Array.from({ length: 4 }, (_, i) => (
          <HSeparator width="152" key={i} />
        ))}
      </div>

      <div className="flex gap-20">
        {Array.from({ length: 8 }, (_, i) => (
          <Binary last={true} key={i} />
        ))}
      </div>
    </div>
  );
};
export default FinalTree;
const Tree = () => (
  <Card className="p-6 border border-solid border-gray-300 bg-teal">
    <table className="w-full">
      <thead>
        <tr>
          <th className="w-1/3 text-center">#</th>
          <th className="text-center">Left</th>
          <th className="text-center">Right</th>
        </tr>
      </thead>
      <tbody>
        <TreeNode name="Users" leftCount={6} rightCount={0} />
        <TreeNode name="Business" leftCount="$0.00" rightCount="$0.00" />
        <TreeNode name="Carry" leftCount="$0" rightCount="$0" />
        <TreeNode name="Capping" leftCount="$1500" />
        <TreeNode name="Binary" leftCount="$0" />
      </tbody>
    </table>
  </Card>
);

const TreeNode = ({ name, leftCount, rightCount }) => (
  <tr>
    <td>{name}</td>
    <td>{leftCount}</td>
    <td>{rightCount}</td>
  </tr>
);

const Binary = ({ last, first }) => {
  const [showTree, setShowTree] = useState(false);
  const handleImageClick = () => {
    setShowTree(!showTree);
  };
  const handleImageHover = () => {
    setShowTree(true);
  };

  const handleImageLeave = () => {
    setShowTree(false);
  };

  return (
    <div
      className={`flex items-center justify-center flex-col relative ${
        !first ? "border-t mt-8 pt-8" : ""
      }`}
      onMouseEnter={handleImageHover}
      onMouseLeave={handleImageLeave}
      onClick={handleImageClick}
    >
      {!first && <VSeparator height="30" />}
      <div className="w-12 h-12 bg-gray-300"></div>
      {showTree && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-40">
          <Tree />
        </div>
      )}
      <span className="mt-2">John Smith</span>
      {!last && <VSeparator height="30" />}
    </div>
  );
};

const HSeparator = ({ width }) => {
  return <div className={`h-1 w-${width || "full"} bg-gray-300 my-4`}></div>;
};

const VSeparator = ({ height }) => {
  return <div className={`w-1 h-${height || "full"} bg-gray-300`}></div>;
};

function Card({ children }) {
  return <div className="">{children}</div>;
}
