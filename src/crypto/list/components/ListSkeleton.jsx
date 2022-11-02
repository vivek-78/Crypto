import React from "react";
import {Skeleton,TableRow,TableCell} from "@mui/material";
const ListSkeleton = ()=>{
return(
<TableRow
sx={{ '&:last-child td, &:last-child th': { border:0 } }}>
<TableCell component="th" scope="row" align="center">
<Skeleton animation="wave" variant="circular" width={40} height={40} style={{ marginRight: "auto",marginLeft: "auto" }}/>
</TableCell>
<TableCell align="center">
<Skeleton
animation="wave"
height={15}
width="50%"
style={{ marginRight:"auto",marginLeft:"auto" }}
/>
</TableCell>
<TableCell align="center">
<Skeleton
animation="wave"
height={15}
width="80%"
style={{ marginRight:"auto",marginLeft:"auto" }}
/>
</TableCell>
<TableCell align="center">
<Skeleton
animation="wave"
height={15}
width="20%"
style={{ marginRight:"auto",marginLeft:"auto" }}
/>
</TableCell>
<TableCell align="left">
<Skeleton
animation="wave"
height={15}
width="50%"
style={{ marginRight:"auto" }}
/>
</TableCell>
<TableCell align="left">
<Skeleton
animation="wave"
height={15}
width="50%"
style={{ marginRight:"auto" }}
/>
</TableCell>
<TableCell align="left">
<Skeleton
animation="wave"
height={15}
width="70%"
style={{ marginRight:"auto" }}
/>
</TableCell>
</TableRow>
)
}

export default ListSkeleton;