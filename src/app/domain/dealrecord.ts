/**
 * @author sunpengfei
 * @class dealRecord
 * @desc 交易记录类 ceisis -> dealRecord
 * @param id序号，iid物品id，buyerName（买方只存储名字）
 */

export class DealRecord {
    objectId: string;
    id: number;
    iid: number;
    itemName: string;
    buyerName: string; 
}