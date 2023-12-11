

title = 'Surface scatterplots'

framec='lightcoral'

v[0] = ['s']
t[0] = ['Full scatter']
v[1] = ['00000000']
t[1] = ['00000000']
v[2] = ['00000000','00003953','00003975','00003963']
t[2] = ['ALL','Valentia','MtDillon','MaceHead']
v[3] = ['ALL','Ireland'] ;
t[3] = v[3] ;
v[4] = ['PS','FF','GX','TT','TD','QQ','RH','NN','PE1','PE3','PE6','PE12','PE24','LC','CH']
t[4] = ['Mslp','U10m','Max Wind Gust','T2m','Td2m','Q2m','Rh2m','Cloud cover','1h Precipitation','3h Precipitation','6h Precipitation','12h Precipitation','24h Precipitation','Low clouds','Cloud base']
v[5] = [0]
v[5] = v[5].reverse()
t[5] = v[5]
v[6] = ['WoptMoist_T_SC_T_SA_F','Wopt_T_SC_T_SA_F','WoptMoist_T_SC_T_SA_T','Wopt_T_SC_T_SA_T']
t[6] = ['WoptMoist_T_SC_T_SA_F','Wopt_T_SC_T_SA_F','WoptMoist_T_SC_T_SA_T','Wopt_T_SC_T_SA_T']
v[7] = ['ALL','00','12'] ;
t[7] = v[7] ;

mname = ['Type','Period','Station','Selection','Parameter','Level','Exp','Initial time']
loc = ['l','t','t','t','l','l','t']
spec_name =[0,1,2,3,7,6,4,5]
do_debug = false ;
pdir ='Surface/'
ext='1.png'
help = ''; hide_help = false ;
do_send = true ;
do_show_remember = true ;
do_remember = true ;
my_con_txt=['Graphics','Quality control','Stat','Stations']
my_con=['All','Surface/quality_[1].html','Surface/TABLE_LL_[1]_[3].html','Surface/[4]_[1].xml']
