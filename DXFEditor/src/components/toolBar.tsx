
import { IToolbar } from "./types";

const Toolbar = ({
  handleFileUpload,
}: IToolbar) => {

 


  return (
    <div style={{ display: "flex", justifyContent: "space-between", gap: 4, backgroundColor: "#269449", border: "solid", borderColor: "#FFFFFF" }}>
      <div style={{ marginTop: "20px", marginLeft: "40px" }}>
        <div>DXF Viewer and Editor</div>
        <input type="file" accept=".dxf" onChange={handleFileUpload} />
      </div>

    </div>
  );
};

export default Toolbar;
