export interface Menu {
title :string;
icon :string;
expanded :boolean;
children? :children[]
}
export interface children{
title :string;
route:string;
}