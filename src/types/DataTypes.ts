export type subMenuTypes = {
    key: number,
    list?: string[],
    data?: subMenuListTypes[]
}

type subMenuListTypes = {
    url: string,
    keyword: string
}

export type subMenuProps = {
    mainMenus?: any;
    subMenus?: any;
    index?: any;
    changeIndexFn?: any;
};