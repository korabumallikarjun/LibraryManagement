public class searchMerchandiseInfo {
    @AuraEnabled(cacheable=true)
    public static List<Merchandise__c> getMerchandisedata(String merchandiseName){
        merchandiseName = '%'+merchandiseName+'%';
        List<Merchandise__c> act = [select id,name from Merchandise__c where name like:merchandiseName];
        return act;
    }
}