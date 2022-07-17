class Solution {
    public int[][] flipAndInvertImage(int[][] image) {
        int temp = 0;
        for(int[] innerArr : image){
           for(int i = 0; i<innerArr.length/2; i++){
               temp = innerArr[i];
               innerArr[i] = innerArr[innerArr.length-1-i];
               innerArr[innerArr.length-1-i] = temp;
                
           }
        }
        for(int i  =0; i<image.length; i++){
            for(int j =0; j<image[i].length; j++){
                if(image[i][j] ==0){
                    image[i][j] =1;
                }
                else{
                    image[i][j] = 0;
                }
            }
        }
        return image;
    }
}