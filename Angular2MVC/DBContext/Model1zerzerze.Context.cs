﻿//------------------------------------------------------------------------------
// <auto-generated>
//     Ce code a été généré à partir d'un modèle.
//
//     Des modifications manuelles apportées à ce fichier peuvent conduire à un comportement inattendu de votre application.
//     Les modifications manuelles apportées à ce fichier sont remplacées si le code est régénéré.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Angular2MVC.DBContext
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class Model1zerzerzeContainer : DbContext
    {
        public Model1zerzerzeContainer()
            : base("name=Model1zerzerzeContainer")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<ACCOUNT> ACCOUNTs { get; set; }
        public virtual DbSet<ACTION> ACTIONs { get; set; }
        public virtual DbSet<ALERT> ALERTs { get; set; }
        public virtual DbSet<ALERT_CFG> ALERT_CFG { get; set; }
        public virtual DbSet<ASS_COD_CUL> ASS_COD_CUL { get; set; }
        public virtual DbSet<ASS_COND_PART> ASS_COND_PART { get; set; }
        public virtual DbSet<ASS_CYC_SEQ> ASS_CYC_SEQ { get; set; }
        public virtual DbSet<ASS_CYCLE_DESIGNPART> ASS_CYCLE_DESIGNPART { get; set; }
        public virtual DbSet<ASS_HIS_CYC> ASS_HIS_CYC { get; set; }
        public virtual DbSet<ASS_MOD_ACT> ASS_MOD_ACT { get; set; }
        public virtual DbSet<ASS_MOD_HAB> ASS_MOD_HAB { get; set; }
        public virtual DbSet<ASS_MOD_STA> ASS_MOD_STA { get; set; }
        public virtual DbSet<ASS_SEQ_TASK> ASS_SEQ_TASK { get; set; }
        public virtual DbSet<ASS_USE_ACC> ASS_USE_ACC { get; set; }
        public virtual DbSet<ASS_USE_ALERT> ASS_USE_ALERT { get; set; }
        public virtual DbSet<ASS_USE_HAB> ASS_USE_HAB { get; set; }
        public virtual DbSet<ASS_USE_PRE> ASS_USE_PRE { get; set; }
        public virtual DbSet<CFG_PREFERENCE> CFG_PREFERENCE { get; set; }
        public virtual DbSet<CFGDEVICE> CFGDEVICEs { get; set; }
        public virtual DbSet<CFGMODULE> CFGMODULEs { get; set; }
        public virtual DbSet<CFGRADIO> CFGRADIOs { get; set; }
        public virtual DbSet<CODVAL> CODVALs { get; set; }
        public virtual DbSet<CONDITION> CONDITIONs { get; set; }
        public virtual DbSet<CONDITION_PART> CONDITION_PART { get; set; }
        public virtual DbSet<CONDITION_RELAY> CONDITION_RELAY { get; set; }
        public virtual DbSet<CONDITION_SENSOR> CONDITION_SENSOR { get; set; }
        public virtual DbSet<CONDITION_TIME> CONDITION_TIME { get; set; }
        public virtual DbSet<CULTURE> CULTUREs { get; set; }
        public virtual DbSet<CULTURE_LIB> CULTURE_LIB { get; set; }
        public virtual DbSet<CYCLE> CYCLEs { get; set; }
        public virtual DbSet<DESIGN> DESIGNs { get; set; }
        public virtual DbSet<DESIGN_PART> DESIGN_PART { get; set; }
        public virtual DbSet<DEVICE> DEVICEs { get; set; }
        public virtual DbSet<HABILITY> HABILITies { get; set; }
        public virtual DbSet<HISTORY> HISTORies { get; set; }
        public virtual DbSet<HISTORY_ALERT> HISTORY_ALERT { get; set; }
        public virtual DbSet<MODULE> MODULEs { get; set; }
        public virtual DbSet<PREFERENCE> PREFERENCEs { get; set; }
        public virtual DbSet<SEQ_NUMBER> SEQ_NUMBER { get; set; }
        public virtual DbSet<SEQUENCE> SEQUENCEs { get; set; }
        public virtual DbSet<STATE> STATEs { get; set; }
        public virtual DbSet<SYNC> SYNCs { get; set; }
        public virtual DbSet<TASK> TASKs { get; set; }
        public virtual DbSet<TblUser> TblUsers { get; set; }
        public virtual DbSet<TRANSCEIVER_PORT> TRANSCEIVER_PORT { get; set; }
        public virtual DbSet<USER> USERs { get; set; }
    }
}
