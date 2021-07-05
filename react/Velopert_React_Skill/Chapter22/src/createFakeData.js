import Post from './models/post';

export default function createFakeData() {
  const posts = [...Array(40).keys()].map((i) => ({
    title: `포스트 #${i}`,
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo tempus metus ut interdum. Ut scelerisque erat nec purus porta aliquet. Fusce ac tristique tellus, non auctor tortor. Vivamus magna enim, elementum vitae mauris ut, tincidunt maximus odio. Quisque condimentum urna viverra, luctus nisi eget, faucibus mauris. Cras felis odio, gravida et luctus ut, mollis at velit. Sed semper justo non malesuada sagittis. Praesent nec nisl eget ex mattis egestas. Pellentesque sit amet tortor suscipit orci faucibus suscipit vel eu diam. Suspendisse sit amet ligula purus. Praesent eget orci dignissim, maximus nibh sit amet, pellentesque odio. Integer sit amet ante iaculis, imperdiet nulla ac, porta mi. Donec et lacinia ligula.

        Nunc vel nunc quis elit vestibulum fermentum at eget ipsum. In vulputate neque at dolor sodales maximus. Aenean volutpat rutrum volutpat. Curabitur feugiat ipsum in metus ullamcorper, quis lobortis est egestas. Donec ut varius tortor, vel ullamcorper magna. Curabitur sollicitudin id nibh sed porta. Nulla velit ex, fermentum eu suscipit eu, consectetur eu nunc. Nunc finibus felis quis nunc sodales, non tempus mi rutrum. Curabitur rutrum arcu enim, ut tincidunt nisi ultrices vitae. Fusce vitae enim congue felis ultricies semper. Donec tempus nulla at nisl ornare, et tempor lacus dictum.
        
        Phasellus molestie velit cursus eros ultrices efficitur. Maecenas quis pharetra orci. In at arcu odio. Vivamus velit libero, iaculis nec dolor id, aliquam pellentesque lectus. In scelerisque arcu et pellentesque sagittis. Sed dolor lectus, semper ac dignissim eget, pretium id nunc. In consectetur lorem semper quam porta, vitae ullamcorper libero convallis. Nulla pulvinar hendrerit velit, quis auctor tortor iaculis consectetur. Etiam eu risus at ante laoreet posuere laoreet in odio. Maecenas fermentum, ipsum sit amet tincidunt vulputate, dolor nunc ultricies ante, a egestas mi purus ac ante. Praesent lacinia tempus porta. Nunc aliquet est sem, eu scelerisque dui condimentum in. Nunc eu nibh nec tellus lobortis egestas vitae nec enim. Aliquam at risus at risus laoreet ultricies eu in orci. In maximus elementum hendrerit.
        
        Curabitur eget augue metus. Phasellus tincidunt luctus pellentesque. Phasellus id ex id turpis sagittis blandit facilisis a orci. Mauris non augue posuere, elementum ipsum id, euismod nisl. Pellentesque vitae imperdiet mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec in fringilla est. Fusce aliquet, nulla sit amet convallis dictum, magna arcu pulvinar turpis, sit amet pulvinar diam diam ac ligula. Sed quis urna convallis, facilisis nisl ac, suscipit libero. Donec aliquet rhoncus libero, vel interdum eros interdum volutpat. Ut sed bibendum sem, et interdum turpis. Aliquam venenatis a turpis quis elementum.
        
        Vivamus condimentum id mi nec consequat. Pellentesque scelerisque a mauris ut bibendum. Donec eget tempus elit, in tincidunt diam. Nullam ex est, scelerisque vel rhoncus blandit, ullamcorper id felis. Donec placerat justo lacus, in tristique risus mollis vitae. Maecenas vitae vulputate orci, sit amet mattis est. Nullam ut semper mauris. Suspendisse potenti. Donec rhoncus nisi eu dignissim rutrum. Suspendisse fringilla tortor nulla, eget aliquet eros porta vitae. Morbi at enim non tortor eleifend vehicula quis efficitur neque. Quisque convallis pharetra rutrum. Donec nec tincidunt odio.`,
    tags: ['가짜', '데이터'],
  }));

  Post.insertMany(posts, (err, docs) => {
    console.log(docs);
  });
}
