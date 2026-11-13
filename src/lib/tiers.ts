import { Tier } from "@prisma/client";
export const tierMeta:Record<Tier,{label:string;accent:string;benefits:string[]}>={
 MEMBER:{label:"NEXORA MEMBER",accent:"#AEB6C2",benefits:["Member-only updates","Selected partner offers"]},
 PREMIUM:{label:"NEXORA PREMIUM",accent:"#C9A66B",benefits:["Priority support","Premium partner offers","Member events"]},
 ELITE:{label:"NEXORA ELITE",accent:"#C9D2DC",benefits:["Dedicated account contact","Enhanced rewards","Priority invitations"]},
 BLACK:{label:"NEXORA BLACK",accent:"#E5C98A",benefits:["Private client access","Bespoke privileges","Executive priority"]}
};