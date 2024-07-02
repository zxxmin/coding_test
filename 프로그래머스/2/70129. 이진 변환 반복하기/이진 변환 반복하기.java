class Solution {
    public int[] solution(String s) {
        int[] answer = new int[2];
        
        while(!s.equals("1")) { 

            answer[0]++;
            for(int i=0; i<s.length(); i++){
                if(s.charAt(i) == '0') {
                    answer[1]++;
                }
            }

            s = String.valueOf(s.replace("0", "").length());
            s = Integer.toBinaryString(Integer.valueOf(s));

        }
        
        return answer;
    }
}