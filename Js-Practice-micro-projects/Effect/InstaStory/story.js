 var pics = [
  {
  pp: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.3pb29sMQ4VNZZImPnSmABQHaF7%26pid%3DApi&f=1&ipt=0a330bebfb35a1a9392df1ccdf1f2a4bec5562f763c50d9746b394dac198fda4&ipo=images" ,
  story: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2lybHN8ZW58MHx8MHx8fDA%3D",
 },
{
  pp: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.8hW6tJXDxMQZyMxTlnVZnQHaK1%26pid%3DApi&f=1&ipt=52034061399d2d45eebcdd084749f3394d8a97d518e7cbc4164e7c3e62aa9d55&ipo=images",
story: "https://images.unsplash.com/photo-1464863979621-258859e62245?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdpcmxzfGVufDB8fDB8fHww",
}
,{
  pp:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fb0%2Ff6%2F14%2Fb0f614d996e2ced4e943308b36dcf947.jpg&f=1&nofb=1&ipt=9c4182437bbbb60bed95cc9be0495da677052067e95bde860216db9791ef238b&ipo=images",
  story: "https://images.unsplash.com/photo-1558280417-ea782f829e93?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGdpcmxzfGVufDB8fDB8fHww",
} 
,
{
pp:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvariety.com%2Fwp-content%2Fuploads%2F2020%2F08%2Feva.jpg&f=1&nofb=1&ipt=4ddb2f9247a4afe04d6094273f633db5c307b561f86b82357c6b4b13ee12cacf&ipo=images",
story: "https://images.unsplash.com/photo-1553860214-87b92d6c1e22?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGdpcmxzfGVufDB8fDB8fHww",
}
,
{
  pp: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/10/17/12/ariana-grande.jpg",
story: "https://images.unsplash.com/photo-1514315384763-ba401779410f?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGdpcmxzfGVufDB8fDB8fHww",
},
 ]


 var section = document.querySelector('.section')
 
 var mix = ""

 pics.forEach(function(choose,no){
  mix += `<div class="story">
  <img id="${no}" src="${choose.pp}">
</div>` ;


 })

 section.innerHTML = mix;
 
section.addEventListener("click",function (pos) {

  var allStories = document.querySelectorAll('.story');
  allStories.forEach(function (story) {
    story.style.display = 'none';
  });

document.querySelector('#full').style.backgroundImage = `url(${pics[pos.target.id].story})`; 
document.querySelector('#full').style.display = "block" ;

setTimeout(function(){
  document.querySelector('#full').style.display = "none" ;
  document.querySelector('.story').style.display = "none"

  allStories.forEach(function (story) {
    story.style.display = 'inline-block';
  });

 } , 2000)

}
)
 