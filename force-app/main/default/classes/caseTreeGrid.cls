public with sharing class caseTreeGrid { 
    @AuraEnabled(cacheable=true)
    public static list<Case> caseRecords(){
        list<Case> caseList =[SELECT CaseNumber,ParentId FROM Case limit 5];
        return caseList;
    }
}